import { ITemplateDataParser, IStudent } from "../interfaces";

export abstract class StudentTemplateDataParser
  implements ITemplateDataParser<IStudent>
{
  public data: IStudent[] = [];

  constructor(protected filePath: string) {}

  readonly fixStudentData = async (): Promise<void> => {
    this.data = await this.parseDate();
    this.hook();
    this.data = this.fixCpf();
  };

  private fixCpf(): IStudent[] {
    return this.data.map((student) => ({
      ...student,
      cpf: student.cpf.replace(/\D/g, ""),
    }));
  }

  protected hook(): void {}

  protected abstract parseDate(): Promise<IStudent[]>;
}
