# -*- coding: utf-8 -*-
# Generated by Django 1.10.3 on 2016-12-02 12:36
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('base', '0014_auto_20161125_1810'),
    ]

    operations = [
        migrations.AlterField(
            model_name='individual',
            name='case_review_status',
            field=models.CharField(blank=True, choices=[(b'U', b'Uncertain'), (b'A', b'Accepted: Platform Uncertain'), (b'E', b'Accepted: Exome'), (b'G', b'Accepted: Genome'), (b'R', b'Not Accepted'), (b'H', b'Hold'), (b'Q', b'More Info Needed')], default=b'', max_length=1, null=True),
        ),
    ]