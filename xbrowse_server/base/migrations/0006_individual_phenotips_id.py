# -*- coding: utf-8 -*-
# Generated by Django 1.9.5 on 2016-07-11 09:11
from __future__ import unicode_literals

from django.db import migrations, models

from xbrowse_server.base.models import Individual


def copy_guid_to_phenotips_id(apps, schema_editor):
    counter = 0
    for indiv in Individual.objects.all():
        # by default, for previously-existing Individual records, set guid = just the indiv_id
        indiv.phenotips_id = indiv.guid
        indiv.save()
        counter += 1
    print("Copied guid => phenotips_id for %s individuals" % counter)


class Migration(migrations.Migration):

    dependencies = [
        ('base', '0005_auto_20160627_0815'),
    ]

    operations = [
        migrations.AddField(
            model_name='individual',
            name='phenotips_id',
            field=models.SlugField(blank=True, default=b'', max_length=165),
        ),

        migrations.RunPython(copy_guid_to_phenotips_id, reverse_code=migrations.RunPython.noop),
    ]