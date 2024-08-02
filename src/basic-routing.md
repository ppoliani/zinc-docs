---
title: "BasicRouting"
draft: false
weight: 3
---

## Example.

1. Import it in your code:
```zig
const z = @import("zinc");
```

2. Create a handle function for http request.
```zig
fn hello(ctx: *z.Context, _: *z.Request, _: *z.Response) anyerror!void {
    try ctx.Text("Hello!");
}
```

3. Create an zinc engine, and add handle function to router.
```zig
var zinc = try z.Engine.init(8080);

var router = zinc.getRouter();
try router.get("/hello", hello);
```

3. Complete code.
```zig
const z = @import("zinc");

pub fn main() !void {
    var zinc = try z.Engine.init(8080);

    var router = zinc.getRouter();
    try router.get("/hello", hello);

    try zinc.run();
}

fn hello(ctx: *z.Context, _: *z.Request, _: *z.Response) anyerror!void {
    try ctx.Text("Hello!");
}
```

Read more information about [Examples](https://github.com/zon-dev/zinc-examples).

