export interface Country {
  ID: string
  Country: string
  CountryCode: string
  Slug: string
  NewConfirmed: number
  TotalConfirmed: number
  NewDeaths: number
  TotalDeaths: number
  NewRecovered: number
  TotalRecovered: number
  Date: Date
}

export interface Countries {
  [index: number]: Country
}

export interface Global {
  NewConfirmed: string
  TotalConfirmed: string
  NewDeaths: string
  TotalDeaths: string
  NewRecovered: string
  TotalRecovered: string
  Date: string
}

export enum Order {
  DEFAULT = 'default',
  ALPHABETICAL = 'alphabetical',
  NUMBER_OF_CASES = 'number-of-cases'
}

export interface Summary {
  Global?: Global
  Countries?: Countries
  Date?: Date
  Status: boolean
}
