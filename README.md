# Contents
- [Features](#features) 
- [Initial Step](#initial-step) 
- [DB Migration](#db-migration) 
- [Install NPM](#install-npm) 
- [Response Format](#response-format) 

# FEATURES
1. node js express
2. db-migrate

# INITIAL STEP
1. Clone
2. Duplicate .env.example -> .env
3. Modify .env
4. RUN app
```
$ docker-compose up
```
5. Install package
```
$ docker exec -it qays_api npm install
```
6. Check with open in the browser http://host:port

# DB Migration

1. Create DB migration
```
$ docker exec -it qays_api db-migrate create <migration-name>
```

2. Then edit api/migrations files
3. Migrate database
```
$ docker exec -it qays_api db-migrate up
```

# DB Seeder

1. Create DB seeder
```
$ docker exec -it qays_api db-migrate --migrations-dir "seeders" create <seeder-name>
```

2. Then edit api/seeders files
Migrate Seeder
```
$ docker exec -it qays_api db-migrate --migrations-dir "seeders" up
```

# RESPONSE FORMAT

## on success
```
{
    'success': false,
    'data': [],
    'message': 'success'
    'errors': null
}
```

## on fail
```
{
    'success': false,
    'data': [],
    'message': 'Error message',
    'errors': {
        'email': 'wrong email',
        'password': 'wrong password'
    }
}
```