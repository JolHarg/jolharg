# todo errors
if [[ "$GITHUB_ACCESS_TOKEN" == "" ]]
then
    echo "Env GITHUB_ACCESS_TOKEN not set."
    exit 1
fi

USER=$1

QS="per_page=100&sort=pushed&type=owner&direction=desc&access_token=$GITHUB_ACCESS_TOKEN"
URL="https://api.github.com/users/$USER/repos?$QS"

mkdir -p .site/github
wget -O .site/github/$USER.json "$URL" 2>/dev/null