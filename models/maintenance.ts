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

export interface Maintenance extends MaintenanceData {
  user: string
}
