# Generated by Django 4.2.7 on 2023-11-06 16:40

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('reg', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='user',
            name='avatar',
            field=models.ImageField(default='', upload_to='user_images/'),
        ),
        migrations.AlterField(
            model_name='user',
            name='gender',
            field=models.CharField(choices=[('m', 'Парень'), ('w', 'Девушка')], max_length=7),
        ),
    ]
