FROM openjdk:8-jdk


#############################################
#                                           #
# Make sure this port number is forwarded   #
# when doing docker run -p <port>:<port>    #
# command.                                  #
#                                           #
#############################################
EXPOSE 9020

#############################################
#                                           #
# Please note the EXOMISER_DATA_DIR         #
# value. The file system path with ref      #
# data (viewable by docker daemon) must     #  
# be mounted to this location in            #
# container at the docker run step          #
#                                           #
#############################################
env EXOMISER_DATA_DIR=/Exomiser/matchbox/data/exomiser-cli-8.0.0/data


#############################################
#                                           #
# This defines if matches that have no      #
# genotypes in common, BUT have a high      #
# phenotype score should be returned as     #
# results                                   #
#                                           #
#############################################
env ALLOW_NO_GENE_IN_COMMON_MATCHES=false

#############################################
#                                           #
# Environment variables for Mongo           #
# connection. Please populate before        #
# doing docker build command                #
#                                           #
#############################################
env MONGODB_HOSTNAME=
env MONGODB_PORT=
env MONGODB_USERNAME=
env MONGODB_PASSWORD=
env MONGODB_DATABASE=



RUN apt-get update \
 && apt-get install -y wget \
 && apt-get install -y git \
 && apt-get install -y maven \
 && apt-get install -y python \
 && apt-get install -y gcc  \
 && apt-get install -y python-dev \
 && apt-get install -y python-setuptools \
 && /usr/bin/easy_install -U pip \
 && /usr/local/bin/pip install crcmod 

MAINTAINER MacArthur Lab

env MVN=mvn

#first get Exomiser built in the local maven for matchbox to import in
#---------------------------------------------------------------------------
ADD settings.xml /root/.m2/settings.xml

RUN git clone https://github.com/exomiser/Exomiser.git
WORKDIR Exomiser
RUN $MVN clean install package


#Now get support data for Exomiser models
#-----------------------------------------------------

#----first get gsutils to interface with google
RUN wget https://storage.googleapis.com/pub/gsutil.tar.gz \
 && mkdir /root/gsutils_dir \
 && tar xfz gsutil.tar.gz -C /root/gsutils_dir \
 && rm gsutil.tar.gz \
 && export PATH=${PATH}:/root/gsutils_dir/gsutil

# install gcsfuse
RUN apt-get update \
 && apt-get install -y lsb-release \
 && GCSFUSE_REPO=gcsfuse-$(lsb_release -c -s) \
 && echo "deb http://packages.cloud.google.com/apt $GCSFUSE_REPO main" | tee /etc/apt/sources.list.d/gcsfuse.list \
 && curl https://packages.cloud.google.com/apt/doc/apt-key.gpg | apt-key add - \
 && apt-get update \
 && apt-get install -y gcsfuse \
 && mkdir /mounted-bucket

#----now get the data and untar it
#WORKDIR data
#RUN /root/gsutils_dir/gsutil/gsutil -m -o GSUtil:parallel_composite_upload_threshold=150M cp gs://seqr-hail/reference_data/exomiser/exomiser-cli-8.0.0.tar.gz data.local.tar.gz \
# && tar -xzf data.local.tar.gz \
# && rm data.local.tar.gz

#now matchbox (and it will see Exomisor in local maven repo)
#---------------------------------------------------------------------------

RUN git clone http://github.com/macarthur-lab/matchbox
WORKDIR matchbox
RUN $MVN -Dmaven.test.skip=true clean install package

env MATCHBOX_JAR=/Exomiser/matchbox/target/matchbox-0.1.0.jar
env MATCHBOX_CONFIG_DIR=/Exomiser/matchbox/config


#Now set matchbox up for deployment and copy over jar and config files
#---------------------------------------------------------------------------
WORKDIR /matchbox_deployment
RUN cp -rf $MATCHBOX_CONFIG_DIR . \
 && cp $MATCHBOX_JAR .

ADD entrypoint.sh  /root/bin/entrypoint.sh

ARG MATCHBOX_SERVICE_PORT
ENV MATCHBOX_SERVICE_PORT=$MATCHBOX_SERVICE_PORT

EXPOSE $MATCHBOX_SERVICE_PORT

CMD ["/root/bin/entrypoint.sh"]

