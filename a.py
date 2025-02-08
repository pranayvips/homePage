import json
import numpy as np
import random
import requests
import cv2

myHeaders={"User-Agent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/90.0.4430.85 Safari/537.36"}
textData = requests.get("https://www.reddit.com/r/wallpaper/hot.json",headers=myHeaders).content
jsonData = json.loads(textData)
posts = jsonData["data"]["children"]
n = random.randint(0,len(posts)-1)
imageContents = requests.get(posts[n]["data"]["url"],headers=myHeaders).content
with open("z.png","wb") as imageFile:
     imageFile.write(imageContents)

# image = cv2.imread(cv2.samples.findFile('z.png'))
# new_image = np.zeros(image.shape, image.dtype)
# new_image = cv2.convertScaleAbs(image, alpha=1, beta=1)
# cv2.imwrite('z.png',new_image)