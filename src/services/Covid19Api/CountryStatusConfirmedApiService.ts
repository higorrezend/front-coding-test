import { Covid19ApiService } from './Covid19ApiService'
import { CountryStatus } from '@/types/CountryStatusTypes'

export class CountryStatusConfirmedApiService extends Covid19ApiService {
  protected uri = '/total/country/{countryName}/status/confirmed'

  public async getCountryStatusConfirmed (countryName: string): Promise<CountryStatus> {
    const uri: string = this.uri.replace('{countryName}', countryName)
    return await this.instance.get<CountryStatus>(uri, {
      params: {
        from: '2022-11-18T00:00:00Z',
        to: '2022-11-22T00:00:00Z'
      }
    })
      .then(({ data }) => data)
  }
}
