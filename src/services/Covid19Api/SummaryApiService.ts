import { Summary } from '@/types/SummaryTypes'
import { Covid19ApiService } from './Covid19ApiService'

export class SummaryApiService extends Covid19ApiService {
  protected uri = '/summary'

  public async getSummary (): Promise<Summary> {
    return await this.instance.get<Summary>(this.uri)
      .then(({ data }) => data)
  }
}
