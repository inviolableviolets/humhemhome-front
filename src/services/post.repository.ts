import { Post } from "../models/post";
import { ApiResponse } from "../types/api.response";

export class PostRepository {
  constructor(public url: string) {
    this.url += "/posts";
  }

  async getAll(url = this.url): Promise<ApiResponse> {
    const response = await fetch(url);
    if (!response.ok) {
      const message = `Error: ${response.status}. ${response.statusText}`;
      throw new Error(message);
    }

    const answer = (await response.json()) as ApiResponse;

    return answer;
  }

  async create(item: FormData): Promise<Post> {
    const response = await fetch(this.url + "/form", {
      method: "POST",
      body: item,
      // headers: { Authorization: "Bearer " + this.token },
    });
    return response.json() as Promise<Post>;
  }

  async update(data: Partial<Post>): Promise<Post> {
    const response = await fetch(this.url + "/" + data.id, {
      method: "PATCH",
      body: JSON.stringify(data),
      headers: {
        // "Content-Type": "application/json",
        // Authorization: "Bearer " + this.token,
      },
    });
    return response.json() as Promise<Post>;
  }

  async delete(id: Post["id"]): Promise<boolean> {
    const response = await fetch(this.url + "/" + id, {
      method: "DELETE",
      headers: {
        // "Content-Type": "application/json",
        // Authorization: "Bearer " + this.token,
      },
    });
    return response.ok;
  }
}
