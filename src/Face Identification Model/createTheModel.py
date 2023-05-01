import cv2
import os
import numpy as np

# Create a face detector instance
face_detector = cv2.CascadeClassifier(cv2.data.haarcascades + "haarcascade_frontalface_default.xml")

# Initialize the video capture object
video_capture = cv2.VideoCapture(0)

# Start the face recording loop
num_samples = 0
while True:
    # Prompt user to enter name for the person being recorded
    person_name = input("Enter person name (or 'q' to quit): ")

    # Exit the loop if 'q' is entered
    if person_name == 'q':
        break

    # Create a directory for the person if it doesn't exist
    if not os.path.exists("people/" + person_name):
        os.makedirs("people/" + person_name)

    # Start capturing frames for the person
    for i in range(1000):
        # Capture frame-by-frame
        ret, frame = video_capture.read()

        # Convert frame to grayscale
        gray = cv2.cvtColor(frame, cv2.COLOR_BGR2GRAY)

        # Detect faces in the frame
        faces = face_detector.detectMultiScale(gray, scaleFactor=1.3, minNeighbors=5)

        # Draw rectangles around the faces
        for (x, y, w, h) in faces:
            cv2.rectangle(frame, (x, y), (x+w, y+h), (0, 255, 0), 2)
            num_samples += 1

            # Save the face image
            face_image = gray[y:y+h, x:x+w]
            cv2.imwrite("people/" + person_name + "/" + str(num_samples) + ".jpg", face_image)

        # Display the resulting frame
        cv2.imshow('Video', frame)

        # Exit the loop if 'q' is pressed
        if cv2.waitKey(1) & 0xFF == ord('q'):
            break

# Release the capture object and close the windows
video_capture.release()
cv2.destroyAllWindows()

# Train the face recognizer model
face_recognizer = cv2.face.LBPHFaceRecognizer_create()

face_samples = []
labels = []
people = os.listdir("people")
for i, person in enumerate(people):
    image_names = os.listdir("people/" + person)
    for image_name in image_names:
        # Load the image
        image_path = "people/" + person + "/" + image_name
        image = cv2.imread(image_path, cv2.IMREAD_GRAYSCALE)

        # Add the face sample and label
        face_samples.append(image)
        labels.append(i)

# Train the model
face_recognizer.train(face_samples, np.array(labels))

# Save the model
face_recognizer.save("model.yml")
print("Model saved successfully!")