import {useEnv} from "@/utils/env/env.util";

export abstract class Environment {
    protected static get Env(): ImportMetaEnv { return useEnv(); }
}