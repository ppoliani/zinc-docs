---
title: "Grouping routes"
draft: false
weight: 6
---

## Grouping routes.

```zig
const std = @import("std");
const zinc = @import("zinc");

pub fn main() !void {
    var z = try zinc.init(.{ .port = 8080 });
    defer z.deinit();

    var router = z.getRouter();

    var group = try router.group("/api");

    // /api
    try group.get("", api);

    // /api/v1
    var v1group = try group.group("/v1");
    // /api/v1/login
    try v1group.get("/login", v1);
    // /api/v1/logout
    try v1group.post("/logout", v1);

    // /api/v2
    var v2group = try group.group("/v2/user");
    // /api/v2/user/login
    try v2group.addAny(&.{ .GET, .POST }, "/login", v2);
    // /api/v2/user/logout
    try v2group.get("/logout", v2);
    try v2group.post("/logout", v2);

    router.printRouter();

    try z.run();
}

fn api(ctx: *zinc.Context) anyerror!void {
    try ctx.json(.{ .message = "api" }, .{});
}
fn v1(ctx: *zinc.Context) anyerror!void {
    try ctx.json(.{ .version = "v1" }, .{});
}
fn v2(ctx: *zinc.Context) anyerror!void {
    try ctx.json(.{ .version = "v2" }, .{});
}
```

outputs:

```zig
|/
|  /api  { GET }
|    /v1
|      /logout  { POST }
|      /login  { GET }
|    /v2
|      /user
|        /logout  { GET, POST }
|        /login  { GET, POST }
```