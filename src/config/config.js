


const config = {}

if (!process.env.NODE_ENV || process.env.NODE_ENV === 'development') {
    config["env"] = "dev"
    config["fetchUrl"] = "http://127.0.0.1:5000"
} else {
    config["env"] = "prod"
    config["fetchUrl"] = "TODO"
}

export default config;
