import cv2
import numpy as np

# Load the face recognizer model
face_recognizer = cv2.face.LBPHFaceRecognizer_create()
face_recognizer.read("model.yml")

# Create a face detector instance
face_detector = cv2.CascadeClassifier(cv2.data.haarcascades + "haarcascade_frontalface_default.xml")

# Initialize the video capture object
video_capture = cv2.VideoCapture(0)

# Start the face recognition loop
while True:
    # Capture frame-by-frame
    ret, frame = video_capture.read()

    # Convert frame to grayscale
    gray = cv2.cvtColor(frame, cv2.COLOR_BGR2GRAY)

    # Detect faces in the frame
    faces = face_detector.detectMultiScale(gray, scaleFactor=1.3, minNeighbors=5)

    # Draw rectangles around the faces and label them
    for (x, y, w, h) in faces:
        # Recognize the face
        face_image = gray[y:y+h, x:x+w]
        label, confidence = face_recognizer.predict(face_image)
        text = f"Person {label} ({confidence:.2f})"
        cv2.putText(frame, text, (x, y-10), cv2.FONT_HERSHEY_SIMPLEX, 0.5, (0, 255, 0), 2)
        cv2.rectangle(frame, (x, y), (x+w, y+h), (0, 255, 0), 2)

    # Display the resulting frame
    cv2.imshow('Video', frame)

    # Exit the loop if 'q' is pressed
    if cv2.waitKey(1) & 0xFF == ord('q'):
        break

# Release the capture object and close the windows
video_capture.release()
cv2.destroyAllWindows()
