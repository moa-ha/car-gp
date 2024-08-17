// export interface MaintenanceData {
//   wof: string
//   wofDue: string
//   rego: string
//   regoDue: string
//   averageKm: number
// }

export interface MaintenanceData {
  wof: string | null
  wofDue: string | null
  rego: string | null
  regoDue: string | null
  averageKm: number | null
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
