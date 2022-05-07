import { promises } from "fs";
import { IStudent } from "../interfaces";
import { StudentTemplateDataParser } from "./StudentTemplateDataParser";

export class StudentTemplateDataParserJson extends StudentTemplateDataParser {
  protected async parseDate(): Promise<IStudent[]> {
    const rawData = await promises.readFile(this.filePath);

    const data = JSON.parse(rawData.toString()) as IStudent[];

    const studentData: IStudent[] = [];

    data.forEach((student) => {
      const { name, age, cpf } = student;

      studentData.push({ name, age, cpf });
    });

    return studentData;
  }

  protected hook(): void {
    console.log("O HOOK FOI EXECUTADO...");
  }
}
