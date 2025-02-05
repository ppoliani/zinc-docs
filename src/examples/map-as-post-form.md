---
title: "Map as post form"
draft: false
weight: 5
---

## Map as post form.
```zig
POST /post HTTP/1.1
Content-Type: application/x-www-form-urlencoded

name[frist]=jack&name[last]=mike
```

1. Complete code.
```zig
const zinc = @import("zinc");

pub fn main() !void {
    var z = try zinc.init(.{ .port = 8080 });
    defer z.deinit();

    var router = z.getRouter();
    try router.post("/post", queryParamters);

    try z.run();
}
fn queryParamters(ctx: *zinc.Context) anyerror!void {
    var name = ctx.postFormMap("name") orelse return ctx.text("name not found", .{});
    const frist_name = name.get("frist").?;
    const last_name = name.get("last").?;

    try ctx.json(.{
        .frist_name = frist_name,
        .last_name = last_name,
    }, .{});
}
```
response:
```
{
    "frist_name": "jack",
    "last_name": "mike"
}
```

Read more information about [Examples](https://github.com/zon-dev/zinc-examples/tree/main/examples/serving-static-files).

