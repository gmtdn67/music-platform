import * as mongoose from 'mongoose';
export type TrackDocument = Track & Document;
export declare class Track {
    name: string;
    artist: string;
    track: string;
    listens: number;
    picture: string;
    audio: string;
    comments: Comment[];
}
export declare const TrackSchema: mongoose.Schema<Track, mongoose.Model<Track, any, any, any, (mongoose.Document<unknown, any, Track, any, mongoose.DefaultSchemaOptions> & Track & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
} & {
    id: string;
}) | (mongoose.Document<unknown, any, Track, any, mongoose.DefaultSchemaOptions> & Track & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}), any, Track>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, Track, mongoose.Document<unknown, {}, Track, {
    id: string;
}, mongoose.ResolveSchemaOptions<mongoose.DefaultSchemaOptions>> & Omit<Track & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}, "id"> & {
    id: string;
}, {
    name?: mongoose.SchemaDefinitionProperty<string, Track, mongoose.Document<unknown, {}, Track, {
        id: string;
    }, mongoose.ResolveSchemaOptions<mongoose.DefaultSchemaOptions>> & Omit<Track & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    artist?: mongoose.SchemaDefinitionProperty<string, Track, mongoose.Document<unknown, {}, Track, {
        id: string;
    }, mongoose.ResolveSchemaOptions<mongoose.DefaultSchemaOptions>> & Omit<Track & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    track?: mongoose.SchemaDefinitionProperty<string, Track, mongoose.Document<unknown, {}, Track, {
        id: string;
    }, mongoose.ResolveSchemaOptions<mongoose.DefaultSchemaOptions>> & Omit<Track & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    listens?: mongoose.SchemaDefinitionProperty<number, Track, mongoose.Document<unknown, {}, Track, {
        id: string;
    }, mongoose.ResolveSchemaOptions<mongoose.DefaultSchemaOptions>> & Omit<Track & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    picture?: mongoose.SchemaDefinitionProperty<string, Track, mongoose.Document<unknown, {}, Track, {
        id: string;
    }, mongoose.ResolveSchemaOptions<mongoose.DefaultSchemaOptions>> & Omit<Track & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    audio?: mongoose.SchemaDefinitionProperty<string, Track, mongoose.Document<unknown, {}, Track, {
        id: string;
    }, mongoose.ResolveSchemaOptions<mongoose.DefaultSchemaOptions>> & Omit<Track & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    comments?: mongoose.SchemaDefinitionProperty<Comment[], Track, mongoose.Document<unknown, {}, Track, {
        id: string;
    }, mongoose.ResolveSchemaOptions<mongoose.DefaultSchemaOptions>> & Omit<Track & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
}, Track>;
