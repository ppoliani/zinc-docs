---
title: "Query and post form"
draft: false
weight: 5
---

## Query and post form.
```zig
POST /post?id=1234&message=hello&message=world HTTP/1.1
Content-Type: application/x-www-form-urlencoded

name=jack&friend=mike
```

1. Complete code.
```zig
const zinc = @import("zinc");

pub fn main() !void {
    var z = try zinc.init(.{ .port = 8080 });
    defer z.deinit();

    var router = z.getRouter();
    try router.post("/post", queryAndForm);

    try z.run();
}

fn queryAndForm(ctx: *zinc.Context) anyerror!void {
    const id = try ctx.queryString("id");
    const messages = try ctx.queryValues("message");

    const form = ctx.getPostFormMap().?;
    const name = form.get("name").?;
    const friend = form.get("friend").?;

    try ctx.json(.{
        .id = id,
        .name = name,
        .friend = friend,
        .messages = .{ messages.items[0], messages.items[1] },
    }, .{});
}
```

response:
```zig
{
    "id": "1234",
    "name": "jack",
    "friend": "mike",
    "messages": [
        "hello",
        "world"
    ]
}
```

Read more information about [Examples](https://github.com/zon-dev/zinc-examples/tree/main/examples/serving-static-files).

