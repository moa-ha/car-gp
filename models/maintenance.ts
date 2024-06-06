export interface MaintenanceData {
  wof: string
  wofDue: string
  rego: string
  regoDue: string
}

export interface MaintenanceUser extends MaintenanceData {
  user: string
}
