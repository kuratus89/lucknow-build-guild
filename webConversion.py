from PIL import Image
from pathlib import Path

fp = Path("D:/krishna/github/lucknow-build-guild/public/certificate/")

print("folder exists: " , fp.exists())
print("absolute path:" , fp.resolve())

for pf in fp.glob("*.jpg"):
    wpf = pf.with_suffix(".webp")

    try:
        img = Image.open(pf)
        img.save(wpf , "WEBP" , quality=90)
        print(f"converted: {pf.name} -> {wpf.name}")
    
    except Exception as e:
        print(f"fail to convert {pf.name} : {e}")

print(input())