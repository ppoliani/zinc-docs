---
title: "App Data"
draft: false
weight: 3
---

## App Data

Application state is available in each and every context. We can have access to this state within our endpoint logic.

```zig
const zinc = @import("zinc");

const State = struct {
  some_data: u8,
};

pub fn main() !void {
    var state = .{some_data: 10};
    var config = zinc.Config.Engine{ .port = 8080 };
    config.appData(&state);
    
    const engine = try zinc.init(config);
    defer engine.deinit();
    const router = engine.getRouter();

    try router.get("/", home);

    try engine.run();
}

fn home(ctx: *zinc.Context) !void {
    const state: *State = @ptrCast(@alignCast(ctx.data));
    _ = state;
    try ctx.text("Home page", .{});
}
```
