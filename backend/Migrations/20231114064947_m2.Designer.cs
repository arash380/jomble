﻿// <auto-generated />
using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Migrations;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;
using backend.Data;

#nullable disable

namespace backend.Migrations
{
    [DbContext(typeof(JombleContext))]
    [Migration("20231114064947_m2")]
    partial class m2
    {
        protected override void BuildTargetModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder.HasAnnotation("ProductVersion", "6.0.7");

            modelBuilder.Entity("backend.Models.Job", b =>
                {
                    b.Property<Guid>("id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("TEXT");

                    b.Property<string>("Description")
                        .HasColumnType("TEXT");

                    b.Property<string>("ImgUrl")
                        .HasColumnType("TEXT");

                    b.Property<string>("Title")
                        .HasColumnType("TEXT");

                    b.HasKey("id");

                    b.ToTable("Jobs");

                    b.HasData(
                        new
                        {
                            id = new Guid("d911c5bd-074e-492b-b389-c5fe413a874c"),
                            Description = "A random description",
                            ImgUrl = "https://resources.workable.com/wp-content/uploads/2018/01/internal-hiring-featured.png",
                            Title = "Fry cook at the Krusty Krab"
                        });
                });

            modelBuilder.Entity("backend.Models.User", b =>
                {
                    b.Property<Guid>("id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("TEXT");

                    b.Property<string>("Email")
                        .HasColumnType("TEXT");

                    b.Property<string>("FirstName")
                        .HasColumnType("TEXT");

                    b.Property<string>("LastName")
                        .HasColumnType("TEXT");

                    b.Property<string>("Password")
                        .HasColumnType("TEXT");

                    b.HasKey("id");

                    b.ToTable("Users");

                    b.HasData(
                        new
                        {
                            id = new Guid("d911c5bd-074e-492b-b389-c5fe413a874d"),
                            Email = "1@1.com",
                            FirstName = "Arash",
                            LastName = "Saadati",
                            Password = "password"
                        });
                });
#pragma warning restore 612, 618
        }
    }
}
