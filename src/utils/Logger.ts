export class Logger {
  public static error (action: string, error: Error, complementData: any = null): void {
    // Aqui podemos tratar o erro e enviar para algum gestor de logs. ElasticSearch por exemplo.
    console.error(({
      action,
      message: error.message,
      stack: error.stack?.toString(),
      complementData
    }))
  }
}
