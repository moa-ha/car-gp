export interface MaintenanceData {
  wof: string
  wofDue: string
  rego: string
  regoDue: string
}

export interface Wof {
  wof: string
  wofDue: string
}

export interface Rego {
  rego: string
  regoDue: string
}

export interface MaintenanceUser extends MaintenanceData {
  user: string
}

export interface Maintenance extends MaintenanceData {
  id: number
}
