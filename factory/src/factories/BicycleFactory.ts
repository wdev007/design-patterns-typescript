import { Bicycle } from "../entities";
import { IVehicle } from "../interfaces";
import { VehicleFactory } from "./VehicleFactory";

export class BicycleFactory extends VehicleFactory {
  getVehicle(vehicleName: string): IVehicle {
    return new Bicycle(vehicleName);
  }
}
