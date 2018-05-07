export const basehttpInterceptorProviders = [
    {
    provide: HTTP_INTERCEPTORS,
    useClass: BaseUrlInterceptor,
    multi: true
    }
   ];