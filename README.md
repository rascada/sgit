# sgit
Simpler and shorter git syntax

## clone module
```sh
# (text in parentheses) is proposed by sgit
```
```sh
sgit clone

? host: (github) # also you can write bitbucket or gitlab
? user / organization: rascada
? repo: sgit
? folder name: (sgit)

 Cloned rascada/sgit from github to ./sgit
```
or
```sh
sgit clone rascada/sgit

? host: (github)
? user / organization: (rascada)
? repo: (sgit)
? folder name: (sgit)

 Cloned rascada/sgit as sgit successfully

```
with host argument
```sh
sgit clone bitbucket rascada/sgit # or sgit clone bitbucket

? host: (bitbucket)
? user / organization: (rascada)
? repo: (sgit)
? folder name: (sgit)

 Error: Request failed with status code: 404
```
