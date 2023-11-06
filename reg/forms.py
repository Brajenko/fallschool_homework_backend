import datetime
from django import forms


class UserInfo(forms.Form):
    # template_name = 'form_snippet.html'
    avatar = forms.ImageField()
    fullname = forms.CharField(max_length=50)
    gender = forms.ChoiceField(choices=(('m', 'Парень'), ('w', 'Девушка')))
    birthday = forms.DateField()
    tg = forms.CharField(max_length=30)
    phone_number = forms.CharField(max_length=18)
    about = forms.CharField(max_length=400)
    
    def __init__(self, *args, **kwargs):
        super().__init__(*args, **kwargs)
        for key, field in self.fields.items():
            field.label = ""