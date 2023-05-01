import csv
import random
import datetime


def generate_data(start_date, end_date, num_rows):
    data = []
    delta = (end_date - start_date).total_seconds()
    for i in range(num_rows):
        time_delta = random.randint(0, int(delta))
        row_date = start_date + datetime.timedelta(seconds=time_delta)
        hour = row_date.hour
        minute = row_date.minute
        light_intensity = random.randint(20, 90)
        fan_speed = random.randint(0, 5)
        ac_temp = random.uniform(16, 29)
        room_temp = random.uniform(27, 30)
        if 6 <= hour < 18:  # day time
            person = random.randint(0, 1)
            light_intensity = random.randint(60, 100)
            fan_speed = random.randint(2, 5)
            ac_temp = random.uniform(20, 25)
            room_temp = random.uniform(27, 30)
        else:  # night time
            person = random.choice([0, 1, 1])
            light_intensity = random.randint(0, 40)
            fan_speed = random.randint(0, 1)
            ac_temp = random.uniform(16, 20)
            room_temp = random.uniform(26, 29)
        data.append([person, light_intensity, fan_speed, ac_temp, room_temp, hour, minute])
    return data


start_date = datetime.datetime(2022, 1, 1, 0, 0, 0)
end_date = datetime.datetime(2022, 1, 31, 23, 59, 59)
num_rows = 1000

data = generate_data(start_date, end_date, num_rows)

with open('sensor_data.csv', mode='w', newline='') as file:
    writer = csv.writer(file)
    writer.writerow(['person', 'light_intensity', 'fan_speed', 'ac_temp', 'room_temp', 'hour', 'minute'])
    for row in data:
        writer.writerow(row)
