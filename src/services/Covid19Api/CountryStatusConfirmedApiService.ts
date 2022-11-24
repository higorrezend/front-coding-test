import { Covid19ApiService } from './Covid19ApiService'
import { CountryStatus } from '@/types/CountryStatusTypes'

export class CountryStatusConfirmedApiService extends Covid19ApiService {
  protected uri = '/country/{countryName}/status/confirmed'

  public async getCountryStatusConfirmed (countryName: string): Promise<CountryStatus> {
    return await this.instance.get<CountryStatus>(this.uri.replace('{countryName}', countryName))
      .then(({ data }) => data)
  }
}
