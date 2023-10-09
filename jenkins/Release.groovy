@Library('pee-library') _

try {
    def newVersion = params.NEW_VERSION
    def nodeVersion = params.NODE_VERSION
    def githubRepo = params.GITHUB_REPO
    def sourceBranch = params.SOURCE_BRANCH

    println "Releasing Foehn ${newVersion}, nodeVersion=${nodeVersion}"

    if (!newVersion) {
        throw new Exception('Missing build parameter "NEW_VERSION"')
    }

    if (!nodeVersion) {
        throw new Exception('Missing build parameter "NODE_VERSION"')
    }

    if (!githubRepo) {
        throw new Exception('Missing build parameter "GITHUB_REPO"')
    }

    if (!sourceBranch) {
            throw new Exception('Missing build parameter "SOURCE_BRANCH"')
        }

    node('chromium-headless') {
        stage("[Foehn] : Pushing to Github") {
          runGitCommand("remote add Github ${githubRepo}")
          runGitCommand("push Github ${sourceBranch}")
        }

        stage("[Foehn] : Push new version to Github") {
          runGitCommand("push Github ${newVersion}")
        }

        stage("[Foehn] : Deploy to npmjs") {
          runYarnCommand("publish --tag ${newVersion}")
        }
    }
} catch (e) {
    // If there was an exception thrown, the build failed
    currentBuild.result = "FAILED"
    throw e
}

def runYarnCommand(String command, String nodeVersion) {
    def sourceNodeResult = sourceNode(nodeVersion)
    def yarnCommand = "yarn ${command}"
    def cmd = sourceNodeResult ? sourceNodeResult + " && " + yarnCommand : yarnCommand
    echo "Running: ${cmd}"
    sh cmd
}

def runGitCommand(String command) {
    def gitCommand = "git ${command}"
    echo "Running: ${gitCommand}"
    sh gitCommand
}
