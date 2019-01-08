class RutkaUtils {

    static moduleId(props) {
        return props.match.params.id;
    };

    static getRecordI(json, name, value) {
        for (let i = 0; i < json.length; i++) {
            if (json[i][name] === value) {
                return i;
            }
        }
        return -1;
    }

    static moduleTitle(config, name) {
        let title = name;

        for (let i = 0; i < config.length; i++) {
            let el = config[i];
            if (el.name === name) {
                if ("config" in el) {
                    title = el.config.name;
                }
            }
        };

        return title;
    };

    static moduleConfig(config, name) {
        let i = this.getRecordI(config, "name", name);

        if (i !== -1) {
            return config[i].config;
        }

        return null;
    }
}

export default RutkaUtils;