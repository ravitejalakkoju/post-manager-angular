export class User{
    id: number;
    name: string;
    avatar: string;
    lastUsedOn: Date;
    totalPosts: number;
    constructor(user: any)
    {
        this.id = user.id;
        this.name = user.name;
        this.avatar = user.avatar;
        this.totalPosts = user.recent_posts?.length ?? 0;
    }
}