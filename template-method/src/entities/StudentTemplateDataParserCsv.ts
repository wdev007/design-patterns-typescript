import { promises } from "fs";
import { IStudent } from "../interfaces";
import { StudentTemplateDataParser } from "./StudentTemplateDataParser";

export class StudentTemplateDataParserCsv extends StudentTemplateDataParser {
  public data: IStudent[];
  protected async parseDate(): Promise<IStudent[]> {
    const rawData = await promises.readFile(this.filePath);

    const data = rawData.toString();
    const lines = data.split("\n");

    const studentData: IStudent[] = [];

    lines.forEach((line) => {
      const [name, age, cpf] = line.split(";");

      studentData.push({ name, age: Number(age), cpf });
    });

    return studentData;
  }
}
