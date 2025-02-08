import os

os.chdir("weather")
a = os.listdir()

for i in a:
    os.system("ren %s %s"%(i,i+".png"))


