import mongoose, { HydratedDocument } from 'mongoose';
import { Track } from './track.schema';
export type CommentDocument = HydratedDocument<Comment>;
export declare class Comment {
    username: string;
    text: string;
    track: Track;
}
export declare const CommentSchema: mongoose.Schema<Comment, mongoose.Model<Comment, any, any, any, (mongoose.Document<unknown, any, Comment, any, mongoose.DefaultSchemaOptions> & Comment & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
} & {
    id: string;
}) | (mongoose.Document<unknown, any, Comment, any, mongoose.DefaultSchemaOptions> & Comment & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}), any, Comment>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, Comment, mongoose.Document<unknown, {}, Comment, {
    id: string;
}, mongoose.ResolveSchemaOptions<mongoose.DefaultSchemaOptions>> & Omit<Comment & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}, "id"> & {
    id: string;
}, {
    username?: mongoose.SchemaDefinitionProperty<string, Comment, mongoose.Document<unknown, {}, Comment, {
        id: string;
    }, mongoose.ResolveSchemaOptions<mongoose.DefaultSchemaOptions>> & Omit<Comment & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    text?: mongoose.SchemaDefinitionProperty<string, Comment, mongoose.Document<unknown, {}, Comment, {
        id: string;
    }, mongoose.ResolveSchemaOptions<mongoose.DefaultSchemaOptions>> & Omit<Comment & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    track?: mongoose.SchemaDefinitionProperty<Track, Comment, mongoose.Document<unknown, {}, Comment, {
        id: string;
    }, mongoose.ResolveSchemaOptions<mongoose.DefaultSchemaOptions>> & Omit<Comment & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
}, Comment>;
