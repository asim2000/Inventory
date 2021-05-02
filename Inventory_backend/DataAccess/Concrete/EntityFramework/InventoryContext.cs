using Core.Entities.Concrete;
using Entities.Concrete;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Text;

namespace DataAccess.Concrete.EntityFramework
{

    public class InventoryContext:DbContext
    {
        public DbSet<Category> Categories { get; set; }
        public DbSet<Customer> Customers { get; set; }
        public DbSet<Product> Products { get; set; }
        public DbSet<Order> Orders { get; set; }
        public DbSet<User> Users { get; set; }
        public DbSet<OperationClaim> OperationClaims { get; set; }
        public DbSet<UserOperationClaim> UserOperationClaims { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            optionsBuilder.UseSqlServer(@"Server=.\sqlexpress;Database=InventarDb;Integrated Security=true");
        }
        protected override void OnModelCreating(ModelBuilder builder)
        {
            builder.Entity<UserOperationClaim>()
                .HasKey(i => new { i.OperationClaimId, i.UserId });

            builder.Entity<UserOperationClaim>()
                .HasOne(i => i.User)
                .WithMany(i => i.UserOperationClaims)
                .HasForeignKey(i => i.UserId);

            builder.Entity<UserOperationClaim>()
                .HasOne(i => i.OperationClaim)
                .WithMany(i => i.UserOperationClaims)
                .HasForeignKey(i => i.OperationClaimId);
        }

    }
}
