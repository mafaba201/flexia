from PIL import Image

img = Image.open('C:/Users/MARTIN-PC/antigravity/fluxia/assets/images/fluxia-nombre.png').convert('RGBA')
bg = img.getpixel((0, 0))[:3]

newData = []
for pixel in img.getdata():
    if len(pixel) == 4:
        r, g, b, a = pixel
    else:
        r, g, b = pixel
        a = 255
    
    if all(abs(c - rgb) < 30 for c, rgb in zip((r, g, b), bg)):
        newData.append((r, g, b, 0))
    else:
        newData.append((r, g, b, a))

img.putdata(newData)
img.save('C:/Users/MARTIN-PC/antigravity/fluxia/assets/images/fluxia-nombre.png')
print("Background made transparent")
