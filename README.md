# sgit
Simpler and shorter git syntax with questions

## clone module
```sh
sgit clone rascada/sgit # git clone https://github.com/rascada/sgit.git

 Cloned rascada/sgit as sgit successfully
```
```sh
sgit clone

? user / organization: rascada
? repo: sgit

 Cloned rascada/sgit as sgit successfully
```
### prompt
sgit also can ask for all information with prompt option:
```sh
# (text in parentheses) is proposed by sgit
```
```sh
sgit clone -p # --prompt

? host: (github)
? user / organization: rascada
? repo: sgit
? folder name: (sgit)

 Cloned rascada/sgit as sgit successfully
```
or
```sh
sgit clone rascada/sgit -p

? host: (github)
? user / organization: (rascada)
? repo: (sgit)
? folder name: (sgit)

 Cloned rascada/sgit as sgit successfully
```
### hosts
#### available hosts
- github (default)
- bitbucket
- gitlab

```sh
sgit clone bitbucket rascada/sgit -p # or sgit clone bitbucket

? host: (bitbucket)
? user / organization: (rascada)
? repo: (sgit)
? folder name: (sgit)

 Error: Request failed with status code: 404 # sgit repo is only on github
```
