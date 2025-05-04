import os
import boto3

def run():
    # Configuration
    bucket = os.environ['INPUT_BUCKET']
    region = os.environ['INPUT_AWS-REGION']
    dist_folder = os.environ['INPUT_DIST-FOLDER']
    s3_prefix = ''

    # Initialize S3 client
    s3 = boto3.client('s3', region_name=region)

    # Walk through local directory
    for root, _, files in os.walk(dist_folder):
        for file in files:
            local_path = os.path.join(root, file)
            relative_path = os.path.relpath(local_path, dist_folder)
            s3_key = os.path.join(s3_prefix, relative_path).replace("\\", "/")  # for Windows compatibility

            print(f"Uploading {local_path} to s3://{bucket}/{s3_key}")
            s3.upload_file(local_path, bucket, s3_key)



if __name__ == '__main__':
    run()


