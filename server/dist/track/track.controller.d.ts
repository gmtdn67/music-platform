import { TrackService } from './track.service';
import { CreateTrackDto } from './dto/create-track.dto';
import * as mongoose from 'mongoose';
import { CreateCommentDto } from './dto/create-comment-dto';
export declare class TrackController {
    private trackService;
    constructor(trackService: TrackService);
    create(files: any, dto: CreateTrackDto): Promise<import("./schemas/track.schema").Track>;
    getAll(count: number, offset: number): Promise<import("./schemas/track.schema").Track[]>;
    getOne(id: mongoose.ObjectId): Promise<import("./schemas/track.schema").Track>;
    delete(id: mongoose.ObjectId): Promise<mongoose.Schema.Types.ObjectId | null>;
    addComment(dto: CreateCommentDto): Promise<import("./schemas/comment.schema").Comment>;
    listen(id: mongoose.ObjectId): Promise<void>;
}
