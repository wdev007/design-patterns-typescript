import { Car } from "../entities";
import { IVehicle } from "../interfaces";
import { VehicleFactory } from "./VehicleFactory";

export class CarFactory extends VehicleFactory {
  getVehicle(vehicleName: string): IVehicle {
    return new Car(vehicleName);
  }
}
