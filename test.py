import scipy.misc 
import cv2 
from PIL import Image

# 축소할 이미지 사이즈(w,h)
width = 100
height = 128

# 이미지가 있는 폴더 경로
file_path ='C:/Users/onycom/Desktop/'
# 가져올 이미지 이름
file_name = 'sky.jpg'
image_path = file_path + file_name

# 압축정도
value = 90

# 이미지 축소
def ImgResize(x):
    # cv2.imread : x 이미지를 cv2.imread를 통해 읽어와 resize함. (1 = color, 0 = gray scale)
    # cv2.resize : width,height 만큼 resize함. 축소를 위해 보간은 cv2.INTER_AREA
    x2 = cv2.resize(cv2.imread(x,1),(width,height), interpolation = cv2.INTER_AREA)
    # cv2 함수는 BGR로 이미지를 받아오기 때문에 RGB로 변환
    temp = cv2.cvtColor(x2, cv2.COLOR_BGR2RGB) 
    # temp를 폴더경로에 'bolg_icon.jpg'이름으로 저장.
    scipy.misc.imsave(file_path+'blog_icon.jpg', temp)
    
# 이미지 압축
def ImgCompress(x):
    with Image.open(x) as im:
        # 이미지를 불러와 value만큼 축소하여 폴더경로에 'compression_image.jpg' 이름으로 저장.
        im.save(file_path+'compression_image.jpg',quality = value)
        
ImgResize(image_path)
ImgCompress(image_path)
print()
print('successful !')