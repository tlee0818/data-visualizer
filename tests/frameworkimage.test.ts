import { FrameworkImage } from "../src/core/frameworkimage"



test("create new image", () => {

   const testImage = new FrameworkImage("test", 1, 1, "testurl")

   expect(testImage.getHeight()).toBe(1)
   expect(testImage.getWidth()).toBe(1)
   expect(testImage.getName()).toBe("test")
   expect(testImage.getColorDensities()).toStrictEqual({})
   
})

test("set image color densities", () => {

    const testImage = new FrameworkImage("test", 1, 1, "testurl")
    testImage.setColorDensity("black", 100)

    expect(testImage.getColorDensities()).toStrictEqual({"black": 100})
    
 })
