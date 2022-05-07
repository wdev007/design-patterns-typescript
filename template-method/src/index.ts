import { resolve } from "path";
import { StudentTemplateDataParserTxt } from "./entities/StudentTemplateDataParserTxt";
import { StudentTemplateDataParserCsv } from "./entities/StudentTemplateDataParserCsv";
import { StudentTemplateDataParserJson } from "./entities/StudentTemplateDataParserJson";

const app = async () => {
  const filePathTxt = resolve(__dirname, "files", "students.txt");
  const filePathCsv = resolve(__dirname, "files", "students.csv");
  const filePathJson = resolve(__dirname, "files", "students.json");

  const studentTemplateDataParserTxt = new StudentTemplateDataParserTxt(
    filePathTxt
  );
  const studentTemplateDataParserCsv = new StudentTemplateDataParserCsv(
    filePathCsv
  );
  const studentTemplateDataParserJson = new StudentTemplateDataParserJson(
    filePathJson
  );

  await studentTemplateDataParserTxt.fixStudentData();
  console.log(studentTemplateDataParserTxt.data);

  await studentTemplateDataParserCsv.fixStudentData();
  console.log(studentTemplateDataParserCsv.data);

  await studentTemplateDataParserJson.fixStudentData();
  console.log(studentTemplateDataParserJson.data);
};

app();
