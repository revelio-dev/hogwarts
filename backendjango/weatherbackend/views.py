from django.shortcuts import render

from django.http import HttpResponse
from django.views import View
import requests


class HelloWorld ( View ):

    def get(self, *args, **kwargs):
        return HttpResponse ( 'Hello World! ' )


class WeatherApi ( View ):
    def getapi(request):
        response = requests.get (
            'http://api.openweathermap.org/data/2.5/group?id=524901,703448,'
            '2643743&units=metric&APPID=00880c4ee0df28f44a55e8a161f9ddfa' )
        weather_data = response.json ()
        return render( request, 'weather.html', {
            'list': weather_data['list']
        } )
