---
title: "Map as query parameters"
draft: false
weight: 5
---

## Map as query parameters.
```zig
GET /query?ids[a]=1234&ids[b]=hello&ids[b]=world HTTP/1.1
```

1. Complete code.
```zig
const zinc = @import("zinc");

pub fn main() !void {
    var z = try zinc.init(.{ .port = 8080 });
    defer z.deinit();

    var router = z.getRouter();
    try router.get("/query", queryParamters);

    try z.run();
}

fn queryParamters(ctx: *zinc.Context) anyerror!void {
    var ids = ctx.queryMap("ids") orelse return ctx.text("ids not found", .{});
    const ids_a = ids.get("a").?.items;
    const ids_b = ids.get("b").?.items;

    try ctx.json(.{
        .a = ids_a[0],
        .b = .{ ids_b[0], ids_b[1] },
    }, .{});
}
```
response:
```
{
    "a": "1234",
    "b": [
        "hello",
        "world"
    ]
}
```

Read more information about [Examples](https://github.com/zon-dev/zinc-examples/tree/main/examples/serving-static-files).

