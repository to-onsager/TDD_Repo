
import Test from "./test.mjs";
import { tempConverter, FARENHEIT, CELSIUS } from "../tempConverter.mjs";

let test = Test("Tempratur konverterer tester");

test.isEqual(tempConverter(0, FARENHEIT), 32, "0 C til Farenheit");
test.isApproximately(tempConverter(0, CELSIUS), -17.7778, 0.1, "0 F til Celsius");

test.isEqual(tempConverter(100, FARENHEIT), 212, "100  C til Farenheit");
test.isApproximately(tempConverter(100, CELSIUS), 37.7778, 0.1, "100 F til Celsius");