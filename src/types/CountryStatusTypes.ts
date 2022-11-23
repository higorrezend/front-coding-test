export interface Status {
  Country: string
  CountryCode: string
  Province: string
  City: string
  CityCode: string
  Lat: string
  Lon: string
  Cases: number
  Status: string
  Date: Date
}

export interface CountryStatus {
  [index: number]: Status
}
